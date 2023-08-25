import  humps from 'humps'

export default () =>(req, res, next) => {
          req.body = humps.camelizeKeys(req.body)
          req.params = humps.camelizeKeys(req.params)
          req.qurey = humps.camelizeKeys(req.qurey)
          next()
}