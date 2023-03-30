const app = Vue.createApp({
    data() {
      return {
        timers: [{ time: 0, running: false, finished: false }]
      }
    },
    methods: {
      startTimer(timer) {
        timer.running = true
        timer.interval = setInterval(() => {
          timer.time++
        }, 1000)
      },
      pauseTimer(timer) {
        timer.running = false
        clearInterval(timer.interval)
      },
      resetTimer(timer) {
        timer.running = false
        timer.finished = false
        timer.time = 0
        clearInterval(timer.interval)
      },
      stopTimer(timer) {
        timer.running = false
        clearInterval(timer.interval)
      },
      addTimer() {
        const newTimer = { time: 0, running: false, finished: false }
        this.timers.push(newTimer)
        this.stopTimer(newTimer)
      },
      formatTime(time) {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
      }
    }
  })
  
  app.mount('#app')
  