package com.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.model.User;

public interface UserRepository extends CrudRepository<User, Integer>{
	
	@Query(value = "SELECT * FROM user WHERE user_email = :email", nativeQuery = true)
	public List<User> getUserByEmail(@Param("email") String email);
	
//	@Modifying
//	@Transactional
//	@Query(value = "UPDATE admin SET admin_password = :newPassword WHERE admin_username = :username", nativeQuery = true)
//	public int changeUserPassword(@Param("username") String username, @Param("newPassword") String newPassword);
}
