package pl.tarkiewicz.libraryapp.Rate.Dto;


public class RateDto {



//    public RateDto(int rate) {
//        this.rate = rate;
//    }
//
//    private int rate;
//
//    public int getRate() {
//        return rate;
//    }
//
//    public void setRate(int rate) {
//        this.rate = rate;
//    }

    //private Double rate;
//
//
//    public RateDto(Double rate) {
//        this.rate = rate;
//
//    }
//
//    public Double getRate() {
//        return rate;
//    }
//
//    public void setRate(Double rate) {
//        this.rate = rate;
//    }


    //@JsonIgnore
    private String rat;

    public RateDto(String rat) {
        this.rat = rat;
    }

    public String getRate() {
        return rat;
    }

    public void setRate(String rat) {
        this.rat = rat;
    }
}