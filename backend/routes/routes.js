const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
// import schema
const signupTemplate = require('../models/users')
const contractTemplate = require('../models/contracts')
const productTemplate = require('../models/products')
const videosTemplate = require('../models/videos')
const userProductTemplate = require('../models/customer_products')
const { response } = require('express')
const scheduleTemplate = require('../models/schedule')
// define Post request for Create a User action
router.post('/signup', async (req, response) => {
  const salt = await bcrypt.genSalt(10)
  const saltedPassword = await bcrypt.hash(req.body.password, salt)

  const signedUpUser = new signupTemplate({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: saltedPassword,
  })

  signedUpUser
    .save()
    .then((data) => {
      response.json(data)
    })
    .catch((error) => {
      response.json(error)
    })
})

// Login
router.post('/signin', async (req, resp) => {
  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    let saltedPassword = null
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10)
      saltedPassword = await bcrypt.hash(req.body.password, salt)
    }

    const myCursor = mongoose.model('Users').collection.find({
      userName: req.body.userName,
      password: req.body.password || saltedPassword,
    })

    //var curUser
    //var userData = [];
    //while ((curUser = await myCursor.next()) != null) {
    //      console.log(curUser)
    //  }
    var userData = (await myCursor.hasNext()) ? await myCursor.next() : null
    if (userData) {
      resp.json(userData)
    } else {
      resp.status(404).json({ error: 'Users not found' })
    }
  })
})

//Products
router.get('/products', async (req, resp) => {
  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose.model('Products').collection.find()
    var productData = []
    var curProducts = null
    while ((curProducts = await myCursor.next()) != null) {
      productData.push(curProducts)
    }

    if (productData) {
      resp.json({ Products: productData })
    } else {
      resp.status(404).json({ error: 'Contracts not found' })
    }
  })
})

router.post('/products', async (req, resp) => {
  const product = new productTemplate({
    productName: req.body.productName,
    productDescription: req.body.productDescription,
    productPrice: req.body.productPrice,
  })

  product
    .save()
    .then((data) => {
      resp.json(data)
    })
    .catch((error) => {
      resp.json(error)
    })
})

//contracts
router.get('/contracts', async (req, resp) => {
  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose.model('Contracts').collection.find()
    var contractdata = []
    var contract
    while ((contract = await myCursor.next()) != null)
      contractdata.push(contract)

    if (contractdata.length > 0) {
      resp.json({ contracts: contractdata })
    } else {
      resp.status(404).json({ error: 'Contracts not found' })
    }
  })
})

router.get('/contracts/:Id', async (req, resp) => {
  let id = req.params.Id

  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose.model('Contracts').collection.find()
    let contract = null
    let contractdata = null
    while ((contract = await myCursor.next()) != null) {
      if (contract._id == id) {
        contractdata = contract
      }
    }

    if (contractdata) {
      resp.json({ contract: contractdata })
    } else {
      resp.status(404).json({ error: 'Contract not found' })
    }
  })
})

router.post('/contracts', async (req, resp) => {
  const contract = new contractTemplate({
    contractName: req.body.contractName,
    contractDate: req.body.contractDate,
    contractUser: req.body.contractUser,
    contractBinary: req.body.contractBinary,
    contractType: req.body.contractType,
    contractService: req.body.contractService,
    contractPrice: req.body.contractPrice,
    contractBinaries: req.body.contractBinaries,
  })
  contract
    .save()
    .then((data) => {
      resp.json(data)
    })
    .catch((err) => {
      resp.json(err)
    })
})

// UserData
// get specified User
router.get('/user/:Id', async (req, resp) => {
  let id = req.params.Id
  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose
      .model('Users')
      .collection.find(/*{ id: { $eq: id } }*/)
    let curUser
    let userdata = null
    while ((curUser = await myCursor.next()) != null && userdata == null) {
      if (curUser._id == id) {
        userdata = curUser
      }
    }
    if (userdata) {
      resp.send({ user: userdata })
    } else {
      resp.status(404).send({ error: 'User not found' })
    }
  })
})

router.get('/user', async (req, resp) => {
  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose.model('Users').collection.find()
    let userdata = []
    let currentUser
    while ((currentUser = await myCursor.next()) != null) {
      userdata.push(currentUser)
    }

    //    userdata = getUserProductData(userData);

    if (userdata) {
      resp.send({ users: userdata })
    } else {
      resp.status(400).send({ error: 'No users found' })
    }
  })
})

router.get('userProducts/:userId', async (req, resp) => {
  let id = req.params.userId
  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose.model('Users').collection.find({ userId: id })
    let data = []
    let currentUser
    while ((currentUser = await myCursor.next()) != null) {
      data.push(currentUser)
    }

    //    userdata = getUserProductData(userData);

    if (data) {
      resp.send({ userProducts: data })
    } else {
      resp.status(400).send({ error: 'No products for given user found' })
    }
  })
})

// update specified User
router.patch('/user/:Id', async (req, resp) => {
  let id = req.params.Id
  console.log(id)

  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    //First, get the user and update all values, so we do not have to deal with
    // figuring out what fields have been changed
    let saltedPassword = null
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10)
      saltedPassword = await bcrypt.hash(req.body.password, salt)
    }
    const myCursor = mongoose.model('Users').collection.find()
    var userdata = null
    var currentUser = null
    while ((currentUser = await myCursor.next()) != null) {
      if (currentUser._id == id) {
        userdata = currentUser
      }
    }
    if (userdata) {
      userdata.fullName = req.body.user.fullName || req.body.user.fullName
      userdata.userName = req.body.user.userName || userdata.userName
      userdata.email = req.body.user.email || userdata.email
      userdata.password = saltedPassword || userdata.password

      mongoose
        .model('Users')
        .collection.updateOne(
          { id: { $eq: id } },
          {
            $set: {
              fullName: userdata.fullName,
              userName: userdata.userName,
              email: userdata.email,
              password: userdata.password,
            },
          },
          { upsert: true },
        )
        .then((data) => {
          resp.json(data)
        })
        .catch((err) => {
          resp.status(404).json(err)
        })
    } else {
      resp.status(404).json({ error: 'User not found' })
    }
  })
})

/* Videos */
router.get('/videos', async (req, resp) => {
  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose.model('videos').collection.find()

    let videoArr = []
    let currentVideo = null
    while ((currentVideo = await myCursor.next()) != null) {
      currentVideo.videoLink =
        path.join(path.resolve(), 'videos' + path.sep) + currentVideo._id
      videoArr.push(currentVideo)
    }

    if (videoArr.length > 0) {
      resp.status(200).json({ videos: videoArr })
    } else {
      resp.json({ error: 'No Videos found' })
    }
  })
})

router.get('/videos/:Id', async (req, resp) => {
  let id = req.params.Id
  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose.model('videos').collection.find()
    var videodata = null
    var currentVideo = null
    while ((currentVideo = await myCursor.next()) != null) {
      if (currentVideo._id == id) {
        currentVideo.videoLink =
          path.join(path.resolve(), 'videos' + path.sep) + req.params.Id
        videodata = currentVideo
      }
    }
    if (videodata) {
      resp.json({ video: videodata })
    } else {
      resp.status(404).json({ error: 'Video not found.' })
    }
  })
})

router.post('/videos', (req, resp) => {
  let fileBuffer
  const video = new videosTemplate({
    videoName: req.body.videoName,
    videoCategory: req.body.videoCategory,
  })

  video
    .save()
    .then((data) => {
      if (req.files) {
        fileBuffer = req.files
        if (fileBuffer) {
          fs.writeFileSync('./videos/' + data._id, fileBuffer.File.data)
        }
      }

      resp.json(data)
    })
    .catch((error) => {
      resp.json(error)
    })
})

router.get('/vid/:name', (req, resp) => {
  resp.sendFile(
    path.join(path.resolve(), 'videos' + path.sep) + req.params.name,
  )
})

/* Calendar */
router.get('/calendar/user/:id', (req, resp) => {
  let userId = req.params.id

  if (userId) {
    mongoose.connect(process.env.DATABASE_ACCESS, async () => {
      const myCursor = mongoose.model('Appointments').collection.find()

      var calendarDates = []
      var currentAppointment = null
      while ((currentAppointment = await myCursor.next()) != null) {
        if (currentAppointment.appointmentMembers)
          currentAppointment.appointmentMembers.forEach((element) => {
            if (element.id == userId) {
              calendarDates.push(currentAppointment)
            }
          })
      }

      console.log(calendarDates)
      if (calendarDates) {
        resp.json({ dates: calendarDates })
      } else {
        resp.status(404).json({ error: 'Video not found.' })
      }
    })
  }
})

/* Calendar */
router.get('/calendar/:id', (req, resp) => {
  let calendarId = req.params.id

  if (calendarId) {
    mongoose.connect(process.env.DATABASE_ACCESS, async () => {
      const myCursor = mongoose.model('Appointments').collection.find()

      var calendarDate = null
      var currentAppointment = null
      while ((currentAppointment = await myCursor.next()) != null) {
        if (currentAppointment.id == calendarId) {
          calendarDate = currentAppointment
        }
      }

      if (calendarDate) {
        resp.json(calendarDate)
      } else {
        resp.status(404).json({ error: 'Video not found.' })
      }
    })
  }
})

router.get('/calendar', (req, resp) => {
  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose.model('Appointments').collection.find()

    var calendarDates = []
    var currentAppointment = null
    while ((currentAppointment = await myCursor.next()) != null) {
      calendarDates.push(currentAppointment)
    }
    if (calendarDates) {
      resp.json({ dates: calendarDates })
    } else {
      resp.status(404).json({ error: 'Video not found.' })
    }
  })
})

router.patch('/calendar', (req, resp) => {
  console.log(req.body)

  mongoose.connect(process.env.DATABASE_ACCESS, async () => {
    const myCursor = mongoose.model('Appointments').collection.find()
    var data = null
    var currentDate = null
    while ((currentDate = await myCursor.next()) != null) {
      console.log(currentDate)
      if (currentDate.id == req.body.id) {
        data = currentDate
      }
    }
    console.log(data)
    if (data)
      mongoose
        .model('Appointments')
        .collection.updateOne(
          { id: { $eq: req.body.id } },
          {
            $set: {
              appointmentName: req.body.appointmentName || data.appointmentName,
              appointmentDate: req.body.appointmentDate || data.appointmentDate,
              appointmentTimeFrom:
                req.body.appointmentTimeFrom || data.appointmentTimeFrom,
              appointmentTimeTo:
                req.body.appointmentTimeTo || data.appointmentTimeTo,
              appointmentMembers:
                req.body.appointmentMembers || data.appointmentMembers,
            },
          },
          { upsert: false },
        )
        .then((data) => {
          resp.json(data)
        })
        .catch((err) => {
          resp.status(404).json(err)
        })
  })
})

// test interface for inserting data to query samples
router.post('/calendar', (req, resp) => {
  const date = new scheduleTemplate({
    id: req.body.id,
    appointmentName: req.body.appointmentName,
    appointmentDate: req.body.appointmentDate,
    appointmentTimeFrom: req.body.appointmentTimeFrom,
    appointmentTimeTo: req.body.appointmentTimeTo,
    appointmentMembers: req.body.appointmentMembers,
  })

  date
    .save()
    .then((data) => {
      resp.json(data)
    })
    .catch((error) => {
      resp.json(error)
    })
})

module.exports = router
