const HorizontalScroll = ({ children, className }) => {
  return (
    <div className={`${className} hrscroll flex  py-1 overflow-x-auto`}>{children}</div>
  );
};

export default HorizontalScroll;
