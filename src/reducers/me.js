const INITIAL_STATE = {
  general: {
    name: 'Long',
    age: '27',
    gender: 'male'
  },
  projects: [
    {
      name: 'Authentication Server',
      des: 'my first project',
      tech: ['java', 'hibernate', 'spring', 'DB2'],
    },
    {
      name: 'Etoken Verification Service',
      des: 'my second project',
      tech: ['nodejs', 'expressjs']
    },
    {
      name: 'Currency Swap',
      des: 'my third project',
      tech: ['nodejs', 'loopback', 'mysql', 'redis', 'angularjs']
    }
  ],
  contact: {
    phone: '01669904222',
    address: 'Luong The Vinh - Ha Noi',
    email: 'thelonglqd2911@gmail.com'
  }
}

export default function (state = INITIAL_STATE, action) {
  return {...state };
}