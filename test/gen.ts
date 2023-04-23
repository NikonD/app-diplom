import bcrypt from 'bcrypt'

let gen = async () => {
  let str = '123'
  let string = await bcrypt.hash(str, 8)
  console.log(string)
}

gen()

let c = async () => {
  console.log( await bcrypt.compareSync("123", "$2b$08$gs2UcSszVJlk9ZCml6NiouX4Y/7nxHV.ThV2cpBrkC0Ce7KIbGJW."))
}

c()