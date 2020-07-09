class PathConvert {

  bsToS(path){
    return path.replace('\\', /\//g);
  }
  
  sToBs(path){
    return path.replace(/\//g, '\\');
  }

}

export default new PathConvert();