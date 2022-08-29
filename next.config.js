module.exports = {
  webpack: (config, options)=>{
    
    config.module.rules.push({
      test: /\.yml$/,
      use: 'yaml-loader'
    })
    
    return config
  }
}
