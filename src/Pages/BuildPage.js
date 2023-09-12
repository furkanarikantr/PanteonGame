import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddBuildModal from '../Components/PagesComponent/BuildPageComponent/AddBuildModal'
import '../Css/PageCss/PageBuild.css'

export const BuildTypesContext = createContext()

export default function BuildPage() {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [buildings, setBuildings] = useState([])
  const [buildingsTypess, setBuildingTypes] = useState([])

  useEffect(() => {
    getBuildList()
    getBuildTypesList()
  }, [])

  const getBuildList = async () => {
    axios
      .get('https://localhost:7237/api/Build/build-list', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setBuildings(response.data.data)
      })
      .catch((error) => {
        console.error('Veri çekme hatası:', error)
      })
  }

  const getBuildTypesList = async () => {
    axios
      .get('https://localhost:7237/api/BuildType/build-type-list', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setBuildingTypes(response.data)
      })
      .catch((error) => {
        console.error('Veri çekme hatası:', error)
      })
  }

  const deleteBuildFormSubmit = async (e, buildId) => {
    e.preventDefault()

    try {
      const response = await axios({
        method: 'delete',
        url: `https://localhost:7237/api/Build/build-delete?buildId=${buildId}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      if (response.data) {
        if (response.data.success === false) {
          alert(response.data.message)
        } else {
          alert('Silme Başarılı')
          getBuildList()
          getBuildTypesList()
          navigate('/build')
        }
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem('token')
        navigate('/')
      }
    }
  }

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className='buildPageContainer'>
      <div class='grid-item addBuildContainer'>
        <div>Buildings List</div>
        <button
          style={{
            width: '10rem',
            borderRadius: '4rem',
            border: '1px solid #fb6b0b',
          }}
          class='btn btn-light fs-3'
          onClick={openModal}
        >
          Add Build
        </button>
        <BuildTypesContext.Provider value={buildingsTypess}>
          <AddBuildModal
            refreshDataBuild={getBuildList}
            refreshDataBuildType={getBuildTypesList}
            showModal={showModal}
            closeModal={closeModal}
          />
        </BuildTypesContext.Provider>
      </div>
      <hr style={{ margin: '0' }} />
      <div className='cardContainer'>
        <div class='grid-item buildContainer'>
          {buildings.map((item) => (
            <form
              key={item.id}
              className='buildForm card'
              onSubmit={(e) => deleteBuildFormSubmit(e, item.id)}
            >
              <div class='cardHeader'>{item.buildType}</div>
              <div class='cardBody'>
                <div class='cardBodyItem'>
                  <p>Build Cost : {item.buildCost}</p>
                </div>
                <div class='cardBodyItem'>
                  <p>Construction Time : {item.constructionTime}</p>
                </div>
              </div>
              <div class='cardFooter'>
                <button class='btn btn-primary fs-6' style={{ width: '7rem' }}>
                  Delete
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </div>
  )
}
