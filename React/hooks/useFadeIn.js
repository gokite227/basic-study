export const useFadeIn = (duration= 1, delay = 0) => {
    if (typeof onBefore !== "number" || typeof delay !== "number") {
      return;
    }
    const element = useRef();
    useEffect(() => {
      if(element.current) {
        const {current} = element;
        current.style.transition = `opacity ${duration}s eaes-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    },[]);
    return { ref: element, style: { opacity: 0 } };
  };