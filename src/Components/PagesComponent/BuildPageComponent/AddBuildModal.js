import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../../../Css/ComponentCss/FileCss/modal.css'
import { useNavigate } from 'react-router-dom'
import { BuildTypesContext } from '../../../Pages/BuildPage'

export default function AddBuildModal({
  refreshDataBuild,
  refreshDataBuildType,
  showModal,
  closeModal,
}) {
  const navigate = useNavigate()
  const buildingTypes = useContext(BuildTypesContext)
  const [buildType, setBuildingType] = useState('')
  const [buildCost, setBuildingCost] = useState(0)
  const [constructionTime, setConstructionTime] = useState(0)

  const addBuildFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://localhost:7237/api/Build/build-add',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          // Diğer başlıkları da buraya ekleyebilirsiniz
        },
        data: {
          buildType, // Örnek olarak, buildingTypeName
          buildCost, // Örnek olarak, buildingCost
          constructionTime, // Örnek olarak, constructionTime
        },
      })
      if (response.data) {
        if (response.data.success == false) {
          alert(response.data.message)
        } else {
          alert('Ekleme Başarılı')
          refreshDataBuild()
          refreshDataBuildType()

          setBuildingType('')
          setBuildingCost(0)
          setConstructionTime(0)

          navigate('/build')
        }
      }
    } catch (error) {
      console.error('İşlem hatası:', error)
    }
  }

  return (
    <div
      style={{ display: showModal ? 'block' : 'none' }}
      className='modal-container'
    >
      <form className='buildForm modal-main' onSubmit={addBuildFormSubmit}>
        <div className='modalHeader fs-1'>Building Insertion Section</div>
        <div className='modalContent'>
          <div className='formAside'>
            <select
              style={{ width: '100%' }}
              value={buildType}
              class='fs-3 form-select  '
              onChange={(e) => {
                setBuildingType(e.target.value)
              }}
            >
              <option class='fs-6' style={{ display: 'none' }} value=''>
                Select BuildType
              </option>
              {buildingTypes.map((building) => (
                <option value={building.buildTypes}>
                  {building.buildTypes}
                </option>
              ))}
            </select>
          </div>
          <div className='formContent'>
            <label
              for='username'
              class='form-label fs-3'
              style={{ marginBottom: '1.5rem' }}
            >
              Build Cost
            </label>
            <input
              style={{ height: '3.5rem' }}
              class='form-control fs-5'
              value={buildCost}
              onChange={(e) => {
                setBuildingCost(e.target.value)
              }}
              placeholder='Enter Build Cost'
            />
            <br />
            <label
              for='username'
              class='form-label fs-3'
              style={{ marginBottom: '1.5rem' }}
            >
              Construction Time
            </label>
            <input
              style={{ height: '3.5rem' }}
              class='form-control fs-5'
              value={constructionTime}
              onChange={(e) => {
                setConstructionTime(e.target.value)
              }}
            />
          </div>
        </div>

        <div className='modalFooter'>
          <button
            type='button'
            className='btn btn-warning fs-5'
            onClick={closeModal}
          >
            Close
          </button>
          <button
            type='submit'
            className='btn btn-primary fs-5'
            onClick={closeModal}
          >
            Add Build
          </button>
        </div>
      </form>
    </div>
  )
}
