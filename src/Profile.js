import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import AuthContext from './AuthContext'


const Profile = () => {
    let {user, authToken} = useContext(AuthContext)
    let [storage, setStorage] = useState(0)
    
  const handleProfile = async () =>{
    await axios({
     method: "get",
     url: "https://iamrizwan.pythonanywhere.com/api/profile/",
     headers: {
       "content-type": "application/json",
       'Authorization': "JWT "+ String(authToken.access),
     }
   }).then(res => setStorage(res.data))

  }

  



   useEffect(() => {
    handleProfile()
  }, [storage])




  //  console.log(user)
  return (<div className='h-screen'>
    {user && 
    <div className='font-bold flex flex-col justify-center text-3xl'>
      <div>Username: {user.username}</div>
      
      <div>Storage: {storage}</div>
    </div>}
    
    </div>
  )
}

export default Profile
