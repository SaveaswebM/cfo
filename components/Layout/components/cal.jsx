/* First make sure that you have installed the package */
  
  /* If you are using yarn */
  // yarn add @calcom/embed-react
  
  /* If you are using npm */

  
  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function Cal() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <button data-cal-namespace=""
	  data-cal-link="mahadev-saveasweb/30min"
      className="custom-nav-link dist-nav btn header-btn"
	  data-cal-config='{"layout":"month_view"}'
	  >Free Consultation</button>;
  };
  