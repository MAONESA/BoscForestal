import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/login.css'

const USERS = {
  'msole@boscforestal.cat':   'Boscforestal01!',
  'provira@boscforestal.cat': 'Boscforestal02!',
  'opuig@boscforestal.cat':   'Boscforestal03!',
  'mserra@boscforestal.cat':  'Boscforestal04!',
  'lmarin@boscforestal.cat':  'Boscforestal05!',
  'jcasas@boscforestal.cat':  'Boscforestal06!',
  msole:'Boscforestal01!', provira:'Boscforestal02!', opuig:'Boscforestal03!',
  mserra:'Boscforestal04!', lmarin:'Boscforestal05!', jcasas:'Boscforestal06!'
};

export default function Login() {
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [toast, setToast]         = useState(null)
  const [fails,  setFails]        = useState(0)
  const [clicks, setClicks]       = useState(0)

  /* -------- ajuda automàtica -------- */
  const showDefaultCreds = () => {
    setEmail('provira@boscforestal.cat')
    setPassword('Boscforestal02!')
    setToast({ ok:false, msg:'💡 Prova amb les credencials predefinides' })
    setTimeout(() => setToast(null), 2800)
    setFails(0); setClicks(0)                      // reinicia comptadors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const key       = email.trim().toLowerCase()
    const goodPass  = USERS[key]

    if (goodPass && goodPass === password) {
      setToast({ ok:true, msg:'🌲 Sessió iniciada!' })
    } else {
      const nfails = fails + 1
      setFails(nfails)
      setToast({ ok:false, msg:'❌ Credencials incorrectes' })
      if (nfails >= 5) showDefaultCreds()
    }
    setTimeout(() => setToast(null), 2500)
  }

  /* clics al placeholder d’email */
  const handleEmailClick = () => {
    const nclicks = clicks + 1
    setClicks(nclicks)
    if (nclicks >= 5) showDefaultCreds()
  }

  return (
    <section className="login wrapper">
      <motion.h1
        initial={{ opacity:0, y:25 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:.7, ease:[.33,1,.68,1] }}
      >
        Benvingut al bosc
      </motion.h1>

      <form onSubmit={handleSubmit} className="login__form">
        <motion.input
          type="text"
          placeholder="Email o àlies"
          className="login__input"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          onClick={handleEmailClick}
          whileFocus={{ borderColor:'#18633d' }}
          required
        />
        <motion.input
          type="password"
          placeholder="Contrasenya"
          className="login__input"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          whileFocus={{ borderColor:'#18633d' }}
          required
        />

        <motion.button
          type="submit"
          className="login__btn"
          whileHover={{ scale:1.06 }}
          whileTap={{ scale:.94 }}
        >
          Entrar
        </motion.button>
      </form>

      <AnimatePresence>
        {toast && (
          <motion.div
            className={`login__toast ${toast.ok ? 'ok':'fail'}`}
            initial={{ y:60, opacity:0 }}
            animate={{ y:0,  opacity:1 }}
            exit={{ y:60, opacity:0 }}
            transition={{ duration:.6, ease:[.33,1,.68,1] }}
          >
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
