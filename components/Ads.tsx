import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import YouTube from 'react-youtube';
import { useEffect, useRef, useState } from "react";

const opts = {
    playerVars: {
      autoplay: 1,
      iv_load_policy:3,
      disablekb: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      fs:0,
      controls:0
    },
  };

const Ads = () => {
    const youtube = useRef(null);
    const [loading, setLoading] = useState(true);

    return ( <>
        <div className={styles.ads}>
            <YouTube videoId={"I0JJIobo-N8"} ref={youtube} opts={opts} />
            <YouTube videoId={"daTqLIf5S3M"} ref={youtube} opts={opts} />
           <YouTube videoId={"rVJ4CCCKt9w"} ref={youtube} opts={opts} />
           <YouTube videoId={"JWpVBKKW7Gc"} ref={youtube} opts={opts} />
        </div>
    </> );
}
 
export default Ads;