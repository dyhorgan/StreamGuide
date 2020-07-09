import React from 'react'
import {dummyDataOriginal} from './DummyDataOriginal'
import {Navbar} from './components'
import Routes from './routes'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      results: [],
      showResults: false
    }
    this.showResultsFunc = this.showResultsFunc.bind(this)
    this.compFunc = this.compFunc.bind(this)
    this.browseClick = this.browseClick.bind(this)
  }
  compFunc(a, b) {
    if (a.length == 0) return b.length
    if (b.length == 0) return a.length

    var matrix = []

    var i
    for (i = 0; i <= b.length; i++) {
      matrix[i] = [i]
    }

    var j
    for (j = 0; j <= a.length; j++) {
      matrix[0][j] = j
    }

    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
          )
        }
      }
    }

    return matrix[b.length][a.length]
  }

  browseClick() {
    this.setState({showResults: false})
  }

  async showResultsFunc(string) {
    let array = await dummyDataOriginal.map(obj => {
      return {
        title: obj.title,
        num: this.compFunc(string, obj.title),
        id: obj.id
      }
    })
    let newArray = array.sort(function compareNumbers(a, b) {
      return a.num - b.num
    })
    this.setState({showResults: true, results: newArray})
    console.log(
      'showResults equals',
      this.state.showResults,
      'results equals',
      this.state.results
    )
  }
  render() {
    return (
      <div className="grey lighten-2">
        <Navbar
          results={this.state.results}
          showResults={this.state.showResults}
          showResultsFunc={this.showResultsFunc}
          browseClick={this.browseClick}
        />
        <Routes
          results={this.state.results}
          showResults={this.state.showResults}
          showResultsFunc={this.showResultsFunc}
          compFunc={this.compFunc}
        />
      </div>
    )
  }
}

export default App
