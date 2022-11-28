import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.css';
import ProfilePicture from '../ProfilePicture';
import axios from '../../api';
import { useParams } from 'react-router-dom';

export default function Profile({ tweet }) {
  const { id } = useParams();
  const { token } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
        try  {
       const response = await axios.get(`/twitter/profile/${id}`,  {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
        console.log(`✅ ${response.status} ${response.statusText}`);
        setUsers(response.data.user);
      } catch (error) {
        console.error('❌', error);
      }
          
    })();
  }, []);

    return (
        <div className={styles.box}>
          <ProfilePicture image={users.profilePicture} />
         
      </div>
      );
}
