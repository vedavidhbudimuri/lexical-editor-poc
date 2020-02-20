import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from '.'

storiesOf('Common Component Guide', module).add('Image Component', () => (
   <Image
      src='https://www.pond5.com/images/images_db/vlp/image-hero-poster.jpg'
      alt='alt text'
   />
))
