import _ from 'lodash'
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { addPost } from '../actions/index'

const FIELDS = {
  title : {
    tag: 'input',
    label: 'Title'
  },
  categories : {
    tag: 'input',
    label: 'Categories'
  },
  content : {
    tag: 'textarea',
    label: 'Post Content'
  }
}

class PostsNew extends Component {
  renderField (field) {
    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <field.tag
          type='text'
          className='form-control'
          {...field.input}
        />
        <div className='text-help'>{touched ? error : ''}</div>
      </div>
    )
  }

  onSubmit (values) {
    this.props.addPost(values, () => {
      this.props.history.push('/')
    })
  }

  render () {
    const { handleSubmit } = this.props
    const fields = Object.keys(FIELDS)
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        { fields.map((field) => {
          return (
            <Field
              key={field}
              label={FIELDS[field].label}
              name={field}
              tag={FIELDS[field].tag}
              component={this.renderField}
            />
          )
        })
        }
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
      </form>
    )
  }

}

function validate (values) {
  const errors = {}

  _.each(_.keys(FIELDS), (field) => {
    if (!values[field]) {
      errors[field] = `Enter some ${field}`
    }
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {addPost})(PostsNew)
)
