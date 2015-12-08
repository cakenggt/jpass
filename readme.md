# JPass
JPass is a [Django][] app which enables the storage of a password vault, much like
[LastPass].

## Theory
A user's vault is stored on the server as an encrypted string. When the user
logs in using the web interface, their password is first hashed using [SJCL]'s
SHA256 algorithm. Then that hashed password is sent to the server to retrieve
the encrypted vault. The user's authentication token and plain password are
kept in local storage.

The web interface then decrypts the encrypted vault using the user's password
and [SJCL]'s AES algorithm.

When a user makes a change to their vault, their vault is uploaded using the
reverse process.

All interactions with the [Django] server are done through API calls with
Token Authentication.

## API
### login
A `GET` request must be sent to `serverurl.com/jpass/api-token-auth/` with
the following data:

    {
      username: "username",
      password: "hashedPassword"
    }
The response data will be in the format:

    {
      token: "authenticationToken"
    }

This token must be included in all further calls to the server in the
Authentication header.

### get-vault
A `GET` request must be sent to `serverurl.com/jpass/get-vault/`.

The response data will be in the format:

    {
      vault: "encryptedVaultString"
    }

This encrypted vault string will need to be decrypted with the user's plain
password.

### set-vault
A `POST` request must be sent to `serverurl.com/jpass/set-vault/` with the
following data:

    {
      vault: "encryptedVaultString"
    }

The string sent must be the vault which was encrypted with the user's plain
password.

[Django]: https://www.djangoproject.com/
[LastPass]: https://lastpass.com/
[SJCL]: https://github.com/bitwiseshiftleft/sjcl
