export const useNetwork = (onChange) => {
    const [status, settatus] = useState(navigator.onLine);
    const handleCange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      settatus(navigator.onLine);
    };
    useEffect(() => {
      window.addEventListener("online", handleCange);
      window.addEventListener("offline", handleCange);
      () => {
        window.removeEventListener("online", handleCange);
        window.removeEventListener("offline", handleCange);
      };
    }, []);
    return status;
  };