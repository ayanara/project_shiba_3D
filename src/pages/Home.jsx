import { useSnapshot } from 'valtio';
import state from '../store'

import { motion, AnimatePresence } from 'framer-motion';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motions';
import CustomButton from '../Components/CustomButton';


const Home = () => {
  const newState = useSnapshot(state);
  return (
    <AnimatePresence>
      {newState.intro && (
        <motion.section className='home' {...slideAnimation('right')}>
          <motion.header {...slideAnimation('down')}>
            <img
              src='./cute_shiba.png'
              alt='logo'
              className="w-8 h-8 object-contain"
            ></img>

          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                Seu Shiba<br className='xl:block hidden' /> do seu jeito.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Se dividar colocando vários Skin no seu Shiba com ferramenta de personalização 3D. <strong>Use sua imaginação</strong>{" "} e deixe o Shiba a sua cara.
              </p>

              <CustomButton
                type="filled"
                title="Deixe do seu jeito"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />

             

            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home