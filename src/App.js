import { Products } from './components/Products';
import contents from './data/productData';
import siteOptions from './data/siteOptionData';
import CoverPage from './components/cover_page';
import FooterDetails from './components/footer_details';

export default function App() {
  return (
    <>
      {siteOptions.map(option => (
        <CoverPage 
          key={option.id}
          image={option.image}
          siteName={option.siteName}
          description={option.description}
          siteLink={option.siteLink}
        />
      ))}

      <div className='AppContainer'>
        {contents.map(item => (
          <Products 
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            appLink={item.appLink}
            rating={item.rating}
          />
        ))}
      </div>

      {siteOptions.length > 0 && (
        <FooterDetails siteName={siteOptions[0].siteName} />
      )}
    </>
  );
}
