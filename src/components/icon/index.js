
import Heart from './heart'
import Branch from './branch'
import Book from './book'
import ArrowDown from './arrow-down'
import Cancel from './cancel'
import Check from './check'
import Github from './github'
import Home from './home'
import Link from './link'
import Location from './location'
import User from './user'
import Twitter from './twitter'
function Index( { name, ...props }) {
    switch (name){
        case 'arrow-down':{
            return <ArrowDown {...props}/>
        }
        case 'book':{
            return <Book {...props} />
        }
        case 'branch':{
            return <Branch {...props} />
        }
        case 'heart':{
            return <Heart {...props} />
        }
        case 'cancel':{
            return <Cancel {...props} />
        }
        case 'check':{
            return <Check {...props}/>
        }
        case 'github':{
            return <Github {...props}/>
        }
        case 'home':{
            return <Home {...props}/>
        }
        case 'link':{
            return <Link {...props}/>
        }
        case 'location':{
            return <Location {...props}/>
        }
        case 'user':{
            return <User {...props}/>
        }
        case 'twitter':{
            return <Twitter {...props}/>
        }
        default:{
            return null
        }
    }

}

Index.defaultProps = {
    size: 16,
    color: 'white'
}

export default Index
