import { defineStore } from 'pinia'

export const useLightStore = defineStore('lights', {
  state: () => ({
    lights: [
      {
        name: 'Inishgort',
        pattern: [
          ['#fff', 2000],
          ['#000', 8000],
        ],
        fade: 10,
      },
      {
        name: 'Dorinish',
        pattern: [
          ['#0f0', 500],
          ['#000', 2500],
        ],
        fade: 100,
      },
      {
        name: 'Cloughcormack',
        pattern: [
          ['yellow', 500],
          ['black', 500],
          ['yellow', 500],
          ['black', 500],
          ['yellow', 500],
          ['black', 500],
          ['yellow', 500],
          ['black', 500],
          ['yellow', 500],
          ['black', 500],
          ['yellow', 500],
          ['black', 500],
          ['yellow', 500],
          ['black', 500],
          ['yellow', 500],
          ['black', 500],
          ['yellow', 500],
          ['black', 6500],
        ],
        fade: 100,
      },
      {
        name: 'Clearway',
        pattern: [
          ['red', 1000],
          ['white', 1000],
        ],
        fade: 100,
      },
      {
        name: 'Test',
        pattern: [
          ['white', 250],
          ['black', 250],
          ['white', 250],
          ['black', 250],
          ['white', 250],
          ['black', 250],
          ['red', 1000],
          ['black', 1000],
        ],
        fade: 100,
      },
    ],
  }),
  actions: {
    moveUp(index) {
      if (index <= 0 || index >= this.lights.length) return
      const [item] = this.lights.splice(index, 1)
      this.lights.splice(index - 1, 0, item)
    },
    moveDown(index) {
      if (index < 0 || index >= this.lights.length - 1) return
      const [item] = this.lights.splice(index, 1)
      this.lights.splice(index + 1, 0, item)
    },
    delete(index) {
      this.lights.splice(index, 1)
    },
  },
})
