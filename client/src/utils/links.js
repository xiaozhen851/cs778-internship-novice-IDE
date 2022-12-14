import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
  {
    id: 1,
    text: 'IDE',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'Profile',
    path: 'profile',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'Question',
    path: 'question',
    icon: <FaWpforms />,
  },

]

export default links