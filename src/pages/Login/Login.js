import React from 'react'
import SocialMedia from '../../components/SocialMedia'
import LoginForm from '../../components/LoginForm'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Login</div>
      <div className={styles.line} />
      <SocialMedia />
      <LoginForm />
    </div>
  )
}
