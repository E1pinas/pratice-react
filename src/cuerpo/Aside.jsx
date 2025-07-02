

export const Aside = ({visible}) => {
  
  return <aside className={`w-1/4 bg-amber-400 ${!visible?"hidden":""}`} ></aside>;
};
