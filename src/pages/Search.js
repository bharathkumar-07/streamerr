import { useFetch } from "../Hooks/useFetch";
import { Card } from "../Components/Card";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../Hooks/useTitle";


    export const Search = ({apiPath,title}) => {
     const [searchParams]=useSearchParams();
     const queryTerm =searchParams.get('q');
      const { data:movies } = useFetch (apiPath,queryTerm);

      //eslint-disable-next-line
     const pageTitle = useTitle(title) ;
     


      return (
        <main>
          <section className="py-7">
            <p className="text-3xl text-gray-700 dark:text-white"
            >{ movies.length === 0 ? `No result found for ${queryTerm}`:`Result for '${queryTerm}'` }</p>
          </section>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap">
            {movies.map((movie)=>(
              <Card key={movie.id} movie={movie}/>
            ))}
            
          </div>
        </section>
      </main>
      )
    }
    