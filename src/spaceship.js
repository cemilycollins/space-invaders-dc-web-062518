class Spaceship {
  constructor(name, crewArray, phasers, shields) {
    this.name = name
    this.crew = crewArray
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = (this.crew.length > 0) ? false : true
    this.phasersCharge = "uncharged"
    if (this.crew.length > 0) {
      this.crew.forEach(crewMember => {
        crewMember.currentShip = this
      })
    }
  }
}
