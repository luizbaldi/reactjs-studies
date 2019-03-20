import { useEffect, useState } from 'react'

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight
})

const useWindowSize = () => {
  const [size, setSize] = useState(getSize())
  const handleResize = () => setSize(getSize())

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

export default useWindowSize
