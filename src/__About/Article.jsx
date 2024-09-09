// Framer Motion
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Article = () => {

  // Scroll Progress
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const title = useTransform(scrollYProgress, [0,1], [0,-300])

  return (
    <div className='parallax-article' ref={container}>
      <div className='parallax-article__container'>
        <h2>My Skills</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi sed aperiam a nisi odit repudiandae molestias praesentium, quia ad voluptates quaerat, fugit reiciendis quasi dolor aspernatur porro illum ex cum et odio impedit non? Quisquam error nisi quam magni.</p>
      </div>
    </div>
  )
}
export default Article
