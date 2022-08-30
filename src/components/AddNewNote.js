import { useState } from "react"

const AddNewNote = ({handleAddNote}) => {
  const [textValue, setTextValue] = useState("");
  const remainingText = 200;

  const HandleChanger = (e) =>{
      if (remainingText - e.target.value.length >= 0){
          setTextValue(e.target.value)
      }
  }

  const SaveHandler =()=>{
   if (textValue.trim().length > 0){
        handleAddNote(textValue);
        setTextValue('');
    }
  }

  return (
      <div className='note new'>
          <textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
                value={textValue}
                onChange={HandleChanger}
			></textarea>
            <div className='note-footer'>
				<small>
					{remainingText - textValue.length} Remaining
				</small>
				<button className='save' onClick={SaveHandler}>
					Save
				</button>
			</div>
      </div>
  )
}

export default AddNewNote