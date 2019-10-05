import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skill Set</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <ul>
            <li>PHP, Node.js, Java</li>
            <li>AWS Service</li>
            <li>React, Jquery, Vue, Html5, CSS</li>
            <li>MySql, Elasticsearch, MongoDB, Couchbase, Oracle</li>
            <li>Docker, Ubuntu, Git, Bitbucket...</li>
          </ul>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Project</h2>
          <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <p><a href="https://mofa188.com" target="_blank">Aladdin</a>: Ecommerce website which can help customers create their own retail website and sell products.</p>
          <p><a href="https://imaster.co.nz" target="_blank">IMASTER</a>: Online booking website which can help trainer explore their class and trainee access the classes they are interested in.</p>
          <p><a href="https://trendsideas.com" target="_blank">Trends</a>: Online magazine website for the Publishing company.</p>
          <p>: </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>I am passionate and hard working web developer. I can adapt quickly to new development environments
          and learn new technologies. I can work autonomously or within a team and enjoy helping other
          developers grow. I am seeking a role as an Intermediate to Senior level Web Developer where I can grow
          and use my skill set to it's full potential.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h4>Email: Sean.xu85@gmail.com</h4>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/sean-xu-70bb6749/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
            <li><a href="https://github.com/seanxu007" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
            <li><a href="https://www.facebook.com/xiang.xu.9028" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main