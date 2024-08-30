// R E A C T
import { useRef } from "react"
// F R A M E R
import { motion, useScroll, useTransform } from 'framer-motion';

const HomePage = () => {
  // Scroll Progress
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })

  const title = useTransform(scrollYProgress, [0,1], [0,-300])
  const img = useTransform(scrollYProgress, [0,1], [0, 90])
  return (
    <>
      <div ref={container} className='home--landing-page'>
        <motion.h1 style={{y:title}} className="landing-page--title" >Jake<br />Aky</motion.h1>
        <div className="landing-page--img home--landing-page-img">
          <motion.h1 style={{y:title}} className="landing-page--title-overlay" >Jake<br />Aky</motion.h1>
        </div>
      </div>
      <div className="test-100"></div>
    </>
  )
}
export default HomePage
