import React, {useRef, useEffect} from "react";
import styled, {keyframes} from "styled-components";
import { motion, useScroll, useAnimation, useSpring, useTransform, useInView } from "framer-motion";

const rotate = keyframes`
  /* 0% {
    transform: rotate(180deg); */
  /* } */
  /* 50% {
    transform: rotate(260deg);
  } */
  100% {
    transform: rotate(360deg);
  }
`;
const circleAnimation = {
  hidden: { x:0 },
  visible: {
    x: 1000,
    transition: { duration: 60, ease: "easeOut" },
  },
};
const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const LogoText = styled(motion.div)`
    /* font-size: 100px;  */
    height: 200px; 
    display: flex;
    flex-direction: row;
`;

const StyledSpan = styled.div`
    z-index: 30;
    font-weight: 700;
    font-size: 80px;
    margin: 5px;
    display: flex;
`;

const RotatingCircle = styled(motion.div)`
    height: 40px;
    width: 40px;
    z-index: 20;
    background-color: red;
    border-radius: 50%;
    animation: ${rotate} 6s linear infinite;
    transform-origin: 50% 50%;
    position: absolute; /*회전 중심을 Text 주변으로 지정하기 위해 필요한 설정*/
`;

const MainAnimation =  ({
  once,
  repeatDelay,
  animation = defaultAnimations,
}) => {
  const controls = useAnimation();
  const textArray = ["S", "T", "U", "D", "i", "O"];
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, triggerOnce: once });

  useEffect(() => {
    let timeout;
    const show = async () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  // 인덱스 부분 다시

    return (
        <>
        <RotatingCircle
          variants={circleAnimation}
          initial="hidden"
          animate={controls}
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
        ></RotatingCircle>        
        <LogoText
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
              aria-hidden
            >
            {textArray.map((line, lineIndex) => (
              <StyledSpan key={`${line}-${lineIndex}`}>
                {line.split(" ").map((word, wordIndex) => (
                  <StyledSpan  key={`${word}-${wordIndex}`}>
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={`${char}-${charIndex}`}
                        variants={animation}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <StyledSpan className="inline-block">&nbsp;</StyledSpan>
                  </StyledSpan>
                ))}
          </StyledSpan>
          
        ))}

        </LogoText>

        </>
        
    )
}

export default MainAnimation;