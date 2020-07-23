module Api 
    module V1
        class MatatusController < ApplicationController
            protect_from_forgery with: :null_session 
           

            def index
                matatus=Matatu.all 

                render json: MatatuSerializer.new(matatus, options).serialized_json
            end

            def show 
                matatu=Matatu.find_by(slug: params[:slug])

                render json: MatatuSerializer.new(matatu, options).serialized_json
            end

            def create
                matatu=Matatu.new(matatu_params)

                if matatu.save
                    render json: MatatuSerializer.new(matatu).serialized_json
                else
                    render json: {error: matatu.errors.messages},status:422
                end
            end

            def update
                matatu=Matatu.find_by(slug: params[:slug])

                if matatu.update(matatu_params)
                    render json: MatatuSerializer.new(matatu_params, options).serialized_json
                else
                    render json: {error: matatu.errors.messages},status:422
                end
            end

            def destroy
                matatu=Matatu.find_by(slug: params[:slug])

                if matatu.destroy
                    head  :no_content
                else
                    render json: {error: matatu.errors.messages},status:422
                end
            end

            private

            def matatu_params
                params.require(:matatu).permit(:name, :image_url)
            end
            
            def options
                @options ||=  {include: %i[reviews]}
            end

        end
    end
end
