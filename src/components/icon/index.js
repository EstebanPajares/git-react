
import Heart from './heart'
import Branch from './branch'
import Book from './book'

function Index( { name, ...props }) {
    switch (name){
        case 'heart': {
            return <Heart {...props} />
        }
        case 'branch': {
            return <Branch {...props} />
        }
        case 'book': {
            return <Book {...props} />
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
