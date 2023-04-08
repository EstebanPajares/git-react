
import Heart from './heart'
import Branch from './branch'
import Book from './book'
import ArrowDown from './arrow-down'
import Cancel from './cancel'
import Check from './check'
import Github from './github'

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
