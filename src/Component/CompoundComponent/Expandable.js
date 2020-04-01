import Header from "./Header";
import Body from "./Body";
import Icon from "./Icon";
import React, {
  useState,
  createContext,
  useCallback,
  useRef,
  useEffect,
  useMemo
} from "react";
import "./Expandable.css";

export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ children, onExpand, className = "", ...otherProps }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded(prevExpanded => !prevExpanded),
    []
  );

  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted) {
      onExpand(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded]);

  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
  const combinedClassNames = ["Expandable", className].join("");

  return (
    <Provider value={value}>
      <div className={combinedClassNames} {...otherProps}>
        {children}
      </div>
    </Provider>
  );
};

Expandable.Header = Header;
Expandable.Body = Body;
Expandable.Icon = Icon;
export default Expandable;
