import { createContext, useContext, useState } from 'react';

const initialValues = {
  ourHistory: {
    y: 0
  },
  whoWeAreToday: {
    y: 0
  },
  whatWeDo: {
    y: 0
  }
}

export const TitlesPositionContext = createContext(null);


export default function TitlesPositionProvider({children}) {
  const titles = useState(initialValues)

  return (
    <TitlesPositionContext.Provider value="Reed">
      {children}
    </TitlesPositionContext.Provider>
  )
}


export function useTitlesPositionContext(){
  const context = useContext(TitlesPositionContext)
  
  if (!context){
    throw new Error('useTitlesPositionContext should be inside TitlesPositionContextProvider')
  }
}
