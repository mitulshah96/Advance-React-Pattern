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

const Expandable = ({
  children,
  onExpand,
  className = "",
  shouldExpand,
  ...otherProps
}) => {
  const [expanded, setExpanded] = useState(false);
  const isExpandControlled = shouldExpand !== undefined;

  const toggle = useCallback(
    () => setExpanded(prevExpanded => !prevExpanded),
    []
  );
  const getToggle = isExpandControlled ? onExpand : toggle;

  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted && !isExpandControlled) {
      onExpand(expanded);
      componentJustMounted.current = false;
    }
  }, [expanded, onExpand, isExpandControlled]);

  const getState = isExpandControlled ? shouldExpand : expanded;
  const combinedClassNames = ["Expandable", className].join("");
  const value = useMemo(() => ({ expanded: getState, toggle: getToggle }), [
    getState,
    getToggle
  ]);

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
