import DiscriptionEvents from "./discriptionEvents/discriptionEvents"
import ImgEvents from "./eventsImg/imgEvents"


const Events = () => {
  return (
    <div className="flex">
        <ImgEvents/>
        <DiscriptionEvents/>
    </div>
  )
}

export default Events