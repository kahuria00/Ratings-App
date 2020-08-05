# README

Simple react-rails CRUD app for rating matatus  **(working progress)**

* System dependencies

`install yarn`

`install nodejs`

`yarn add axios`

`yarn add styled-components`

* Features of this app include:

`Ruby version: 2.5.8`

`Rails version: 6.0.3.2`

`Database: sqlite 1.4`

* Running it locally

`run bundle exec rails db:prepare`

`navigate to http://localhost:3000`

* Testing API enpoints on Postman /testing frontend

```
           Prefix Verb            URI Pattern                      Controller#Action

               root GET    /                                     pages#index
               
    api_v1_matatus  GET    /api/v1/matatus(.:format)            api/v1/matatuss#index
    
                    POST   /api/v1/matatus(.:format)            api/v1/matatus#create
 
    new_api_v1_matatu  GET    /api/v1/matatus/new(.:format)        api/v1/matatus#new`
 
    edit_api_v1_matatu  GET    /api/v1/matatus/:slug/edit(.:format) api/v1/matatus#edit`

    api_v1_matatu  GET    /api/v1/matatus/:slug(.:format)      api/v1/matatus#show
     
                    PATCH  /api/v1/matatus/:slug(.:format)      api/v1/matatus#update
                    
                    PUT    /api/v1/matatus:slug(.:format)       api/v1/matatus#update
                    
                    DELETE /api/v1/matatus/:slug(.:format)      api/v1/matatuss#destroy
                    
     api_v1_reviews POST   /api/v1/reviews(.:format)            api/v1/reviews#create
     
      api_v1_review DELETE /api/v1/reviews/:id(.:format)        api/v1/reviews#destroy
      
                    GET    /*path(.:format)                     pages#index
                    
```
