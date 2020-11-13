package hu.uni.eku.tzs.service.exceptions;

public class GuestAlreadyExistException extends Exception{
    public GuestAlreadyExistException() {
    }

    public GuestAlreadyExistException(String message) {
        super(message);
    }

    public GuestAlreadyExistException(String message, Throwable cause) {
        super(message, cause);
    }

    public GuestAlreadyExistException(Throwable cause) {
        super(cause);
    }

    public GuestAlreadyExistException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
