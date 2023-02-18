import React from 'react'
import { IconFacebook, IconLinkedin, IconTwitter } from 'bobi-icon-svgr'
import styles from './SocialMedia.module.css'

export default function SocialMedia() {
  return (
    <div className={styles.root}>
      <div className={styles.icons}>
        <div className={`${styles.icon} ${styles.iconFacebook}`}>
          {/* Icon with className */}
          <IconFacebook className={styles.facebook} />
        </div>
        <div className={`${styles.icon} ${styles.iconLinkedin}`}>
          {/* Icon with className */}
          <IconLinkedin className={styles.linkedin} />
        </div>
        <div className={`${styles.icon} ${styles.iconTwitter}`}>
          {/* Icon with className */}
          <IconTwitter className={styles.twitter} />
        </div>
      </div>
      <div className={styles.other}>Or use your email</div>
    </div>
  )
}
