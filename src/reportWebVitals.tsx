const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFCP, getFID, getLCP }) => {
      getCLS(onPerfEntry);
      getFCP(onPerfEntry);
      getFID(onPerfEntry);
      getLCP(onPerfEntry);
    });
  }
};

export default reportWebVitals;