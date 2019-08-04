function Scooter(year, color, model) {
    this.year = year
    this.color = color
    this.model = model
  }
   
  const scooter = new Scooter(1929, 'blue', 'LX7')
  
  
  function Driver(name, age, experience) {
    this.name = name
    this.age = age
    this.experience = experience
  }
   
  const john = new Driver('John', 45, 'lots')
  

  function PickupLocation(address, city) {
    this.address = address
    this.city = city
  }
   
  const newYork = new PickupLocation('19 Broadway Street', 'New York')
  
  