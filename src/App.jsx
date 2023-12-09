import './App.css'
import './index.css'

function App() {

  return (
    <>
    <header className='px-2 py-1 '>
        <form>
          <table className='w-auto break-words set-border overflow-hidden border-collapse pr-1'>
            <thead>
              <tr>
                <th className="header pt-2" colSpan='7'>General Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="set-border py-[2px]" colSpan="4">
                <div className="flex w-full px-2 ">
                  <label className="font-medium" htmlFor="date">
                    Date:
                  </label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none  px-2"
                    id="date"
                    type="date"
                    name="uname"
                  />
                </div>
                </td>

                <td className="set-border py-[2px]" colSpan="3">
                <div className="flex w-full px-2">
                  <label className="font-medium " htmlFor="CName">
                    Customer&nbsp;Name:
                  </label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none px-2"
                    id="CName"
                    type="text"
                    name="CName"
                  />
                </div>
                </td>
              </tr>

              <tr>
                <td className="set-border py-[2px]" colSpan="4">
                <div className="flex w-full px-2 ">   
                  <label className="font-medium" htmlFor="CAddress">
                    Customer&nbsp;Address:
                  </label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none  px-2"
                    id="CAddress"
                    type="text"
                    name="CAddress"
                  />
                </div>
                </td>
                <td className="set-border py-[2px]" colSpan="3">
                <div className="flex w-full px-2 ">
                  <label className="font-medium" htmlFor="JName">
                    Job&nbsp;Name:
                  </label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none  px-2"
                    id="JName"
                    type="text"
                    name="JName"
                  />
                </div>
                </td>
              </tr>

              <tr>
                <td className="set-border py-[2px]" colSpan="4">
                  <div className="flex w-full px-2 ">
                  <label className="font-medium" htmlFor="null">
                    
                  </label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none  px-2"
                    id="null"
                    type="text"
                  />
                </div>
                </td>
                <td className="set-border py-[2px]" colSpan="3">
                <div className="flex w-full px-2 ">
                  <label className="font-medium" htmlFor="CContact">
                    Customer&nbsp;Contact:
                  </label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none  px-2"
                    id="CContact"
                    type="text"
                    name="CContact"
                  />
                </div>
                </td>
              </tr>

              <tr>
                <td className="set-border py-[2px]" id="ZipCode">
                  <div className="flex w-full px-2 ">
                  <label className="font-medium" htmlFor="Zip code">
                    Zip&nbsp;Code:
                  </label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none  px-2"
                    id="Zip code"
                    type="text"
                    name='zipcode'
                  />
                </div>
                </td>
                <td className="set-border py-[2px]" colSpan="3">
                <div className="flex w-full px-2 ">
                  <label className="font-medium" htmlFor="plname">
                    Plant&nbsp;Name:
                  </label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none  px-2"
                    id="plname"
                    type="text"
                    name='plname'
                  />
                </div>
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <div className="flex w-full px-2 ">
                  <label className="font-medium" htmlFor="CTelNo">
                    Customer&nbsp;Tel&nbsp;No:
                  </label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none  px-2"
                    id="CTelNo"
                    type="text"
                    name='custelno'
                  />
                </div>
                </td>
              </tr>

              <tr>
                <th className="header pt-2 set-border" colSpan="7">Details of Work Carried Out</th>
              </tr>
              <tr>
                <td className="set-border py-[2px]"  colSpan="7">
                
                  
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]"  colSpan="7">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]"  colSpan="7">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]"  colSpan="7">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]"  colSpan="7">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]"  colSpan="4">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                    placeholder='click ot tap to enter text'
                  />
                </td>
                <td className="set-border py-[2px]"  colSpan="3">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                    placeholder='click ot tap to enter text'
                  />
                </td>
              </tr>
              
            
              <tr>
                <th className="pt-2 header set-border" colSpan="7">Future Action Needed</th>
              </tr>
              <tr className='sub-header overflow-hidden'>
                <td className="set-border py-[2px]" colSpan="6">
                <label htmlFor="Details">Details</label>
                </td>
                <td className="set-border py-[2px] w-[15%]" colSpan="1">
                <label htmlFor="Estimated Cost">Estimated Cost (if known)</label>
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]" colSpan="6">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id="Details"
                    type="text"
                    name='null'
                    
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="0">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]" colSpan="6">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    
                    type="text"
                    name='null'
                    
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="0">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]" colSpan="6">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="0">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]" colSpan="6">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    
                    type="text"
                    name='null'
                   
            
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="0">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                    
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]" colSpan="6">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="0">
                  
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>

              <tr>
                <th className="pt-2 header set-border" colSpan="7">Parts used</th>
              </tr>
              <tr className='sub-header'>
                <td className="set-border py-[2px]" colSpan="2">
                <label htmlFor="Part No">Part No:</label>
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <label htmlFor="Description">Description</label>
                </td>
                <td className="set-border py-[2px]" colSpan="1">
                <label htmlFor="Cost">Cost</label>
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]" colSpan="2">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]" colSpan="2">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              
              <tr>
                <td className="set-border py-[2px]" colSpan="2">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              
              <tr>
                <td className="set-border py-[2px]" colSpan="2">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              
              <tr>
                <td className="set-border py-[2px]" colSpan="2">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              
              <tr>
                <td className="set-border py-[2px]" colSpan="2">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              
              <tr>
                <td className="set-border py-[2px]" colSpan="2">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              
              <tr>
                <td className="set-border py-[2px]" colSpan="2">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]" colSpan="4">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              

              <tr>
                <th className='header set-border pt-2' colSpan="4">Labor/Times</th>
                <th className='header set-border pt-2' colSpan="">Signatures</th>
                <th className=' set-border pt-2' colSpan="2">
                </th>
              </tr>
              
              <tr>
                <td className="set-border py-[2px] sub-header">
                  <label htmlFor="Date">Date</label>
                </td>
                <td className="set-border sub-header py-[2px]">
                  <label htmlFor="Travel">Travel</label>
                </td>
                <td className="set-border sub-header py-[2px]">
                  <label htmlFor="On-Site">On-Site</label>
                </td>
                <td className="set-border sub-header py-[2px]">
                  <label htmlFor="Off-Site">Off-Site</label>
                </td>
                <td className="set-border py-[2px] w-auto overflow-hidden words-break">In refering to this job, quote No.<br/>The time recorded are correct.The work has been completed to my satisfaction.
                </td>
                <td className="set-border py-[2px]">
                  <label htmlFor="Parts/Materials Total">Parts/Materials<br/>Total</label>
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
              <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="date"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px] text-center">
                  <label htmlFor="Customer Signature ">Customer Signature</label>
                </td>
                <td className="set-border py-[2px] text-center">
                  <label htmlFor="Labor">Labor:</label>
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
              <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="date"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px] text-center">
                  <label htmlFor="Misc">Misc:</label>
                  </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="date"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px] text-center">
                  <label htmlFor="Tech Signature">Tech Signature</label>
                </td>
                <td className="set-border py-[2px] text-center">
                  <label htmlFor="Tax">Tax:</label>
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
              <tr>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="date"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
                <td className="set-border py-[2px] text-center">
                  <label htmlFor="Total">Total:</label>
                </td>
                <td className="set-border py-[2px]">
                  <label></label>
                  <input
                    className="rounded w-full text-gray-700 leading-tight focus:outline-none break-words px-2"
                    id=""
                    type="text"
                    name='null'
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </header>
    </>
  )
}

export default App
