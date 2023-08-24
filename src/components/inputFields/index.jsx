import React from 'react'

const InputFields = (props) => {
  return (
    <div>
      <div class="input-group mb-3">
        <span class="input-group-text" id={props.describeBy}>{props.textGroup}</span>
        <input type={props.type} value={props.value}  class="form-control" placeholder={props.placeholder} aria-label={props.placeholder} onChange={props.onChange} aria-describedby={props.describeBy} />
      </div>

    </div>
  )
}
export default InputFields