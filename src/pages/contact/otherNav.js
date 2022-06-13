<motion.div
className='container contact-page'
initial={{ width: 0 }}
animate={{ width: '100%' }}
exit={{ x: window.innerWidth, transition: { duration: 1 } }}
>
<main className='container'>
  <section className='text-zone'>
    <h1>
      <LetterAnimations
        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
        letterClass={letterClass}
        idx={20}
      />
    </h1>
    {/* Contact form  */}
    <form>
      <ul>
        <li>
          <input type='text' name='name' placeholder='Name' required />
        </li>
        <li>
          <input type='email' name='email' placeholder='Email' required />
        </li>
        <li>
          <input type='text' name='topic' placeholder='Topic' required />
        </li>
        <li>
          <textarea name='message' placeholder='Message' required />
        </li>
        <li>
          <input type='submit' className='send-button' />
        </li>
      </ul>
    </form>
  </section>

  <div className='binary-animation'>
    
  </div>
</main>
</motion.div>